import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilerComponent } from './profiler/profiler.component';
import { ProfileRouteModule } from './profile-route.module';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './shared/components/header/header.component';
import { CommandBarComponent } from './shared/components/command-bar/command-bar.component';

@NgModule({
  declarations: [ProfilerComponent, HeaderComponent, CommandBarComponent],
  imports: [
    CommonModule,
    ProfileRouteModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class UserModule {}
