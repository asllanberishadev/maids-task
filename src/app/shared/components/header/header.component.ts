import { Component, EventEmitter, OnDestroy, Output, model } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {
	readonly destroy$: Subject<void> = new Subject<void>();
	private readonly debounceTimeMs = 0;

	searchInput: FormControl = new FormControl<string>('');

	@Output() searchTerm = new EventEmitter<string>();

	ngOnInit(): void {
		this.searchInput.valueChanges.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue: string) => {
			this.searchTerm.next(searchValue);
		});
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
