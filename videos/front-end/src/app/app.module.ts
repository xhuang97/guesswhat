import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogPostService } from './blog_post.service';
import { UserService } from './user.service';
import { ClassesComponent } from './classes/classes.component';
import {MatDividerModule} from '@angular/material/divider';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,     
    BrowserAnimationsModule, 
    FormsModule, 
    HttpClientModule, 
    MaterialModule,
    MatDividerModule 
  ],
  providers: [BlogPostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
