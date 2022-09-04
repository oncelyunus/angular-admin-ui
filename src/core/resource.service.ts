import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export abstract class ResourceService<T> {
    private readonly APIUrl = environment.APIUrl

    constructor(protected httpClient: HttpClient) { }


    toServerModel(entity: T): any {
        return entity;
    }

    fromServerModel(json: any): T {
        return json;
    }

    post(url: string, resource: T) {
        return this.httpClient.post(`/${this.APIUrl + url}`, this.toServerModel(resource))
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(_error: HttpErrorResponse) {
        // Handle the HTTP error here
        return throwError('Something wrong happened');
    }
}
