export class DayDto {
    date: string
    isSelected: boolean = false

    constructor(data: any = {}) {
        
        this.date = data.date
        this.isSelected = data.isSelected
    }
}