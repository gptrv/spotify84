// import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { NgForOf, NgIf } from '@angular/common';
// import { TuiTagModule } from '@taiga-ui/kit';
// import { TuiTableModule } from '@taiga-ui/addon-table';
//
// interface IUser {
//     readonly email: string;
//     readonly name: string;
//     readonly status: 'alive' | 'deceased';
//     readonly tags: readonly string[];
// }
//
// @Component({
//     standalone: true,
//     selector: 'sp-table',
//     templateUrl: './table.component.html',
//     styleUrls: ['./styles/table.less'],
//     imports: [
//         NgIf,
//         NgForOf,
//         TuiTagModule,
//         TuiTableModule
//     ],
//     changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class TableComponent {
//
//     public readonly users$: BehaviorSubject<readonly IUser[]> = new BehaviorSubject<readonly IUser[]>([
//         {
//             name: 'Michael Palin',
//             email: 'm.palin@montypython.com',
//             status: 'alive',
//             tags: ['Funny'],
//         },
//         {
//             name: 'Eric Idle',
//             email: 'e.idle@montypython.com',
//             status: 'alive',
//             tags: ['Funny', 'Music'],
//         },
//         {
//             name: 'John Cleese',
//             email: 'j.cleese@montypython.com',
//             status: 'alive',
//             tags: ['Funny', 'Tall', 'Actor'],
//         },
//         {
//             name: 'Terry Jones',
//             email: '',
//             status: 'deceased',
//             tags: ['Funny', 'Director'],
//         },
//         {
//             name: 'Terry Gilliam',
//             email: 't.gilliam@montypython.com',
//             status: 'alive',
//             tags: ['Funny', 'Director'],
//         },
//         {
//             name: 'Graham Chapman',
//             email: '',
//             status: 'deceased',
//             tags: ['Funny', 'King Arthur'],
//         },
//     ]);
// }
