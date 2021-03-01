import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AgeValidatorComponent } from './age-validator/age-validator.component';
import { MathsTableComponent } from './maths-table/maths-table.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OperateDirective } from './directives/operate.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DiscountPipe } from './pipes/custom/discount.pipe';
import { SearchPipeComponent } from './search-pipe/search-pipe.component';
import { SearchPipe } from './pipes/search.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    AgeValidatorComponent,
    MathsTableComponent,
    NgforComponent,
    NgclassComponent,
    ImageSelectorComponent,
    CustomDirectivesComponent,
    HighlightDirective,
    OperateDirective,
    PipesComponent,
    DiscountPipe,
    SearchPipeComponent,
    SearchPipe,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
