export const addRowFunction = (
    columns: string[],
    setRowsData: React.Dispatch<React.SetStateAction<string[][]>>
) => {
    let array = [""];
    for (let i = 1; i < columns.length; i++) {
        array.push("");
    }
    setRowsData((prevRowsData) => [...prevRowsData, array]);
};

export const deleteRowFunction = (
    index: number,
    setRowsData: React.Dispatch<React.SetStateAction<string[][]>>
) => {
    setRowsData((prevRowsData) => prevRowsData.filter((_, i) => i !== index));
};

export const addColumnFunction = (
    columns: string[],
    setColumns: React.Dispatch<React.SetStateAction<string[]>>,
    setRowsData: React.Dispatch<React.SetStateAction<string[][]>>
) => {
    if (columns.length === 10) {
        return;
    }
    setColumns((prevColumns) => [...prevColumns, `Column ${columns.length + 1}`]);

    // setRowsData((prevRowsData) => prevRowsData.map((row) => row.push("") && row));
    setRowsData((prevRowsData) => prevRowsData.map((row) => [...row, ""]));
};

export const deleteColumnFunction = (
    index: number,
    columns: string[],
    setColumns: React.Dispatch<React.SetStateAction<string[]>>,
    setRowsData: React.Dispatch<React.SetStateAction<string[][]>>
) => {
    if (columns.length === 1) {
        return;
    }
    setColumns((prevColumns) => prevColumns.filter((col) => prevColumns.indexOf(col) !== index));

    setRowsData((prevRowsData) =>
        prevRowsData.map((row) => {
            return row.filter((_, i) => i !== index);
        })
    );
};
