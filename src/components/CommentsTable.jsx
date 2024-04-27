import {
  Paper,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState, useRef, memo, useMemo } from "react";
import { useVirtualizer } from '@tanstack/react-virtual';

export const columns = [
  {
    accessorKey: "text",
    header: "Text",
  },
  {
    accessorKey: "createdDate",
    header: "Date",
  },
];

const Table = ({
  data,
}) => {


  const parentRef = useRef();
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;
    const sortedData = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
    return sortedData;
  }, [data, sortConfig]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const rowVirtualizer = useVirtualizer({
    count: sortedData.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  return (
    <Paper>
      <div ref={parentRef} style={{ overflow: 'auto', maxHeight: '400px' }}>
        <MuiTable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.accessorKey}
                  onClick={() => handleSort(column.accessorKey)}
                  component="th"
                  scope="col"
                >
                  {column.header}
                  {sortConfig?.key == column.accessorKey ? (sortConfig.direction > 'ascending' ? '  🔼' : '  🔽') : '  🔼'}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowVirtualizer.getVirtualItems().map(virtualRow => (
              <TableRow
                key={virtualRow.index}
                style={{
                  top: 0,
                  left: 0,
                  width: '100%',
                }}
              >
                {columns.map(column => (
                  <TableCell key={column.accessorKey}>
                    {sortedData[virtualRow.index][column.accessorKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </div>
    </Paper>
  );
};
export default memo(Table);
