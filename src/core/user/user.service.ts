import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { ResourceService } from "../resource.service";
import { User } from "./user.types";

@Injectable({
    providedIn: 'root'
})
export class UserService extends ResourceService<User>{

    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {
        super(_httpClient);
    }

    getResourceUrl(): string {
        return "/user";
    }

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User) {
        // Store the value
        this._user.next(value);
    }

    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    /**
     * Get the current logged in user data
     */
    get(): Observable<User> {
        // TODO call /me
        throw new Error("Not yet implemented");
    }
}