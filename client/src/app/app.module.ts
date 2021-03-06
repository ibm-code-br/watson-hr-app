import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './app.module.material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { CoolStorageModule } from '@angular-cool/storage';

import { AppComponent } from './app.component';
import { MainPersonalityPageComponent } from './main-personality-page/main-personality-page.component';
import { ChangeParamsPersonalityPageComponent } from './change-params-personality-page/change-params-personality-page.component';
import { PersonalityService } from './services/personality.service';
import { NewAreaDialogComponent } from './new-area-dialog/new-area-dialog.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { InfoParamsDialogComponent } from './info-params-dialog/info-params-dialog.component';
import { InfoAboutResultDialogComponent } from './info-about-result-dialog/info-about-result-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPersonalityPageComponent,
    ChangeParamsPersonalityPageComponent,
    NewAreaDialogComponent,
    UploadDialogComponent,
    CvCardComponent,
    InfoParamsDialogComponent,
    InfoAboutResultDialogComponent
  ],
  entryComponents: [
    NewAreaDialogComponent,
    UploadDialogComponent,
    InfoParamsDialogComponent,
    InfoAboutResultDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NgxChartsModule,
    CoolStorageModule
  ],
  providers: [
    PersonalityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
