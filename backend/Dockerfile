# Use the SDK image to build the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5248

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
RUN dotnet tool install --global dotnet-ef
COPY ["ChatApp.csproj", "./ChatApp/ChatApp.csproj"]
ENV PATH="$PATH:/root/.dotnet/tools"
RUN dotnet restore "ChatApp/ChatApp.csproj"

# COPY ["protos", "./protos"]
WORKDIR "/src/ChatApp"
COPY . .
# RUN dotnet clean "ChatApp.csproj" -c Release

RUN dotnet build "ChatApp.csproj" -c Release -o /app/build

FROM build AS publish
# RUN dotnet add package Microsoft.EntityFrameworkCore.Design --version 7.0.11
# RUN dotnet ef database update --verbose	
RUN dotnet publish "ChatApp.csproj" -c Release -o /app/publish

# Copy the build app to the base image and define entrypoint
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ChatApp.dll"]
