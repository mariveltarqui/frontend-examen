import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
      {
        path: 'paciente',
        loadComponent: () => import('./paciente/paciente.component').then(m => m.PacienteComponent),
        data: {
          title: 'Paciente'
        }
      },
      {
        path: 'reportes',
        loadComponent: () => import('./reportes/reportes.component').then(m => m.ReportesComponent),
        data: {
        title: 'Reportes'
       }
      },
    ]

  }
]