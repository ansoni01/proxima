import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UtilsModule } from '@app/blocks/utils';

import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [...TodoRoutingModule.declarations],
  imports: [SharedModule, UtilsModule, TodoRoutingModule],
})
export class TodoModule {}
