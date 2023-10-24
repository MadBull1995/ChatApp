import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GRPC_INTERCEPTORS } from '@ngx-grpc/core';
import { GrpcErrorInterceptor, GrpcErrorSettings, GRPC_ERROR_SETTINGS } from './grpc-error-interceptor';

export interface GrpcErrorRootOptions {
  settings: GrpcErrorSettings;
}

export interface GrpcErrorChildOptions {
  settings: GrpcErrorSettings;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GrpcErrorModule {

  /**
   * Create GrpcLoggerModule for using in AppModule (application root module)
   * You can provide the options here instead of injecting corresponding tokens separately
   */
  public static forRoot(options?: GrpcErrorRootOptions): ModuleWithProviders<GrpcErrorModule> {
    const providers: Provider[] = [{ provide: GRPC_INTERCEPTORS, useClass: GrpcErrorInterceptor, multi: true }];

    if (options?.settings) {
      providers.push({ provide: GRPC_ERROR_SETTINGS, useValue: options.settings });
    }

    return { ngModule: GrpcErrorModule, providers };
  }

  /**
   * Create GrpcCoreModule for using in children modules (incl. lazy modules)
   * You can provide the options here instead of injecting corresponding tokens separately
   */
  public static forChild(options?: GrpcErrorChildOptions): ModuleWithProviders<GrpcErrorModule> {
    const providers: Provider[] = [{ provide: GRPC_INTERCEPTORS, useClass: GrpcErrorInterceptor, multi: true }];

    if (options?.settings) {
      providers.push({ provide: GRPC_ERROR_SETTINGS, useValue: options.settings });
    }

    return { ngModule: GrpcErrorModule, providers };
  }
}
