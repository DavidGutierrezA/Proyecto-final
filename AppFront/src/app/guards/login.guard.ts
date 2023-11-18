import { Router } from "@angular/router"
import { Inject, inject } from "@angular/core"
import { LoginComponent } from "../components/users/login/login.component"


export const loginGuard = () => {
    const router = inject(Router)
    if (localStorage.getItem('user_token')) {
        return true
    } else {
        router.navigate(['/login'])
        return false
    }
}