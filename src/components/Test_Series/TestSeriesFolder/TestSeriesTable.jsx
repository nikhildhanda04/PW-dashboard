import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table";
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { MoreVertical, Pencil, Copy, Trash } from 'lucide-react';

const TestSeriesTable = ({ paginatedTestSeries, currentPage, entriesPerPage, toggleSeriesEnabled, handleEdit, handleCopy, handleDelete, sortData, sortConfig }) => {
  const sortArrowClass = "text-gray-400 ml-1";

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {[
            { key: 'id', label: 'S. No.' },
            { key: 'title', label: 'Title' },
            { key: 'logo', label: 'Logo' },
            { key: 'price', label: 'Price' },
            { key: 'sortBy', label: 'Sort By' },
          ].map(({ key, label }) => (
            <TableHead key={key} className={key === 'id' ? "w-20" : ""}>
              <button
                className="flex items-center"
                onClick={() => sortData(key)}
              >
                {label}
                <span className={`${sortArrowClass} ${sortConfig.key === key ? 'text-blue-600' : ''}`}>
                  {sortConfig.key === key && sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              </button>
            </TableHead>
          ))}
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {paginatedTestSeries.map((series, index) => (
          <TableRow key={series.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <TableCell>{(currentPage - 1) * entriesPerPage + index + 1}</TableCell>
            <TableCell>{series.title}</TableCell>
            <TableCell>{series.logo || 'N/A'}</TableCell>
            <TableCell>{series.price}</TableCell>
            <TableCell>
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block">
                {series.sortBy.toFixed(2)}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <a href="/tests">
                  <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white">View Tests</Button>
                </a>
                <Switch
                  checked={series.enabled}
                  onCheckedChange={() => toggleSeriesEnabled(series.id)}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEdit(series.id)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleCopy(series.id)}>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Copy</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDelete(series.id)}>
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Delete</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TestSeriesTable;