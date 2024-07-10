export function createRowData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

export function createColumnData(
    name: string
) { 
    return { name } 
};