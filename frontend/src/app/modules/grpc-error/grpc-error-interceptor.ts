import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { GrpcDataEvent, GrpcEvent, GrpcMessage, GrpcRequest } from '@ngx-grpc/common';
import { isObservable, Observable, of } from 'rxjs';
import { share, tap } from 'rxjs/operators';
import { GrpcHandler } from '@ngx-grpc/core';
import { GrpcInterceptor } from '@ngx-grpc/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from 'src/app/core/app.service';

/**
 * A configuration for GrpcLoggerInterceptor
 *
 * Example:
 *
 * ```
 * providers: [
 *   { provide: GRPC_LOGGER_SETTINGS, useValue: { enabled: true } },
 * ]
 * ```
 *
 * or more complex:
 *
 * ```
 * providers: [
 *   { provide: GRPC_ERROR_SETTINGS, useFactory: () => { enabled: localStorage.getItem('GRPC_ERROR_SETTINGS') === 'true' || !environment.prod } },
 * ]
 * ```
 */
export const GRPC_ERROR_SETTINGS = new InjectionToken('GRPC_ERROR_SETTINGS');


/**
 * A configuration definition for GrpcErrorInterceptor
 */
export interface GrpcErrorSettings {
    /**
     * Enables / disables the output, default true
     */
    enabled?: boolean;

    /**
     * Duration of Snackbar visibility in milliseconds, default undefined (Snackbar's default)
     */
    duration?: number;

    /**
     * Label for the action button in the Snackbar, default undefined (No action button)
     */
    actionLabel?: string;

    /**
     * Position of Snackbar on screen.
     * Can specify vertical ('top' | 'bottom') and horizontal ('start' | 'center' | 'end') positions.
     * Default undefined (Snackbar default position)
     */
    position?: { vertical: 'top' | 'bottom'; horizontal: 'start' | 'center' | 'end' };

    /**
     * Custom styles to be applied to the Snackbar, default undefined (No custom styles)
     */
    customStyle?: any;

    /**
     * Includes client settings into the logs, default true
     */
    logClientSettings?: boolean;

    /**
     * Includes request metadata into the logs, default true
     */
    logMetadata?: boolean;

    /**
     * Logs events with status code OK (0), default false
     */
    logStatusCodeOk?: boolean;

    /**
     * Request mapper function, defines what output is generated for the given message.
     * The default implementation is `(msg) => msg.toObject()`.
     * According to your preferences you might choose e.g. `(msg) => msg.toProtobufJSON()` instead.
     */
    requestMapper?: (msg: GrpcMessage) => any;

    /**
     * Response mapper function, defines what output is generated for the given message.
     * The default implementation is `(msg) => msg.toObject()`.
     * According to your preferences you might choose e.g. `(msg) => msg.toProtobufJSON()` instead.
     */
    responseMapper?: (msg: GrpcMessage) => any;
}

/**
 * Interceptor that implements logging of every request to the browser console
 *
 * Can be enabled / disabled by GRPC_LOGGER_ENABLED injection token
 */
@Injectable()
export class GrpcErrorInterceptor implements GrpcInterceptor {

    private static requestId = 0;

    private clientDataStyle = 'color: #eb0edc;';
    private dataStyle = 'color: #5c7ced;';
    private errorStyle = 'color: #f00505;';
    private statusOkStyle = 'color: #0ffcf5;';

    private settings!: GrpcErrorSettings;

    constructor(private app: AppService, private snackBar: MatSnackBar, @Optional() @Inject(GRPC_ERROR_SETTINGS) settings: GrpcErrorSettings = {}) {
        // if (settings)
        this.settings = {
            duration: settings.duration ?? 5000,
            actionLabel: settings.actionLabel ?? 'Close',
            logStatusCodeOk: settings.logStatusCodeOk ?? false,
            enabled: settings.enabled ?? true,
            position: {
                horizontal: settings.position?.horizontal ?? 'center',
                vertical: settings.position?.vertical ?? 'bottom'
            }
            // logClientSettings: settings.logClientSettings ?? true,
            // logMetadata: settings.logMetadata ?? true,
            // logStatusCodeOk: settings.logStatusCodeOk ?? false,
            // requestMapper: settings.requestMapper ?? ((msg: GrpcMessage) => msg.toObject()),
            // responseMapper: settings.responseMapper ?? ((msg: GrpcMessage) => msg.toObject()),
        };
    }

    intercept<Q extends GrpcMessage, S extends GrpcMessage>(request: GrpcRequest<Q, S>, next: GrpcHandler): Observable<GrpcEvent<S>> {
        return next.handle(request).pipe(
            tap(event => {
                if (!(event instanceof GrpcDataEvent)) {
                    if (this.settings.logStatusCodeOk && event.statusCode === 0 || event.statusCode !== 0) {
                        if (event.statusCode === 0) {
                            this.snackBar.open(`Response: ${event.statusCode} ${JSON.stringify(event.metadata.toObject())}`, this.settings.actionLabel, {
                                duration: this.settings.duration,
                                verticalPosition: this.settings.position?.vertical,
                                horizontalPosition: this.settings.position?.horizontal,
                                panelClass: this.settings.customStyle,
                            });
                        } else {
                            // Unauthenticated
                            if(event.statusCode === 16) {
                                this.app.isAuthenticated = false;
                                this.app.logout();
                            }
                            this.snackBar.open(`Error: ${event.statusMessage}`, this.settings.actionLabel, {
                                duration: this.settings.duration,
                                verticalPosition: this.settings.position?.vertical,
                                horizontalPosition: this.settings.position?.horizontal,
                                panelClass: this.settings.customStyle,
                            });
                        }
                    }
                }
            }),
        );
    }

}