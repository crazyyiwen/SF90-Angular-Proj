import {MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule  } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
    imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule ],
    exports: [MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule ]
})

export class CustomAngularMaterialModule{
    
}