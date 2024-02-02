import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { setBAckground } from './customDirectives/setBackground.directive';
import { PercentagePipe,TempPipe } from './pipe/percentage.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: DemoComponent,
  },
  {
    path: 'Converter',
    component: AboutComponent,
  },
   { path: 'template-form', component: TemplateFormsComponent },
   { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'Contact', component: ContactUsComponent },
  { path: 'Login', component: LoginComponent },
  {path:'Movie',component:MoviesComponent},
  { path: '**', component: NotFoundComponent },
  // { path: 'template-form', component: TemplateFormsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    setBAckground,
    PercentagePipe,
    TempPipe,
    ContactUsComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    TemplateFormsComponent,
    ReactiveFormComponent,
    MoviesComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes),FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
