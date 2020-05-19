import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Cont1Component } from './cont1/cont1.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont3Component } from './cont3/cont3.component';
import { Cont4Component } from './cont4/cont4.component';
import { EndComponent } from './end/end.component';
import { FooterComponent } from './footer/footer.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { TitleComponent } from './title/title.component';
import { Text1Component } from './text1/text1.component';
import { BlackblockComponent } from './blackblock/blackblock.component';
import { Text2Component } from './text2/text2.component';
import { PhotoComponent } from './photo/photo.component';
import { Text3Component } from './text3/text3.component';
import { Text4Component } from './text4/text4.component';
import { End2Component } from './end2/end2.component';
import { Blackblock2Component } from './blackblock2/blackblock2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Cont1Component,
    Cont2Component,
    Cont3Component,
    Cont4Component,
    EndComponent,
    FooterComponent,
    SecondPageComponent,
    FirstPageComponent,
    TitleComponent,
    Text1Component,
    BlackblockComponent,
    Text2Component,
    PhotoComponent,
    Text3Component,
    Text4Component,
    End2Component,
    Blackblock2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
