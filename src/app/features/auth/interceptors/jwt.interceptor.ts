import {HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {inject} from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    const authService: AuthService = inject(AuthService);

    const user = authService.currentUser();

    // vérifier si le user existe
    if (user) {
        // rajouter le access token du user dans la requête
        const token = user.accessToken;

        // ajouter Authorization dans les headers
        const requestClone = req.clone({
            headers: req.headers.append('Authorization', 'Bearer ' + token),
        });

        return next(requestClone);
    }

    return next(req);
};
