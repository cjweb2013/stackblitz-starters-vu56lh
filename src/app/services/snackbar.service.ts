import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ToastClassEnum } from '../enums/snackbar.enum';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private snackbar: MatSnackBar) {}

  /**
   * Open mat snackbar with some custom default config
   * @param message Snackbar message
   * @param toastClass Uses `ToastClassEnum` to specify intent. Default to `ToastClassEnum.default`
   * @param duration Specify the duration in milliseconds. Default to `5000ms`
   * @param vertical Specify the vertical position of the snackbar. Default to `'bottom'`
   */
  openSnackbar(
    message: string,
    toastClass?: ToastClassEnum,
    duration: number = 5000,
    vertical?: MatSnackBarVerticalPosition
  ): void {
    this.snackbar.open(message, 'Close', {
      duration: duration,
      horizontalPosition: this.horizontalPosition,
      panelClass: [toastClass ?? ToastClassEnum.default],
      verticalPosition: vertical ?? this.verticalPosition,
    });
  }
}
