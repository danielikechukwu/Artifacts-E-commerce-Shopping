import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BugService } from './components/Services/bug.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  CreateCanActivateProductGuard,
  CreateCanDeactivateProductGuard,
} from './components/create-product/create-product.guard';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewArtProductComponent } from './components/dialog/view-art-product/view-art-product.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({

  declarations: [
    AppComponent
    , routingComponents
    , MessageComponent
    , ViewArtProductComponent
  ],

  imports: [
    ReactiveFormsModule
    , HttpClientModule
    , BrowserAnimationsModule
    , FormsModule
    , FontAwesomeModule
    , RouterModule
    , MatDialogModule
    , MatSnackBarModule
    , AppRoutingModule
    , FontAwesomeModule
  ],

  providers: [
    BugService,
    CreateCanDeactivateProductGuard,
    CreateCanActivateProductGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
