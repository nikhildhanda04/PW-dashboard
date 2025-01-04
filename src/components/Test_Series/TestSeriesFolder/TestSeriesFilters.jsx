import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

const TestSeriesFilters = ({ paidFreeFilter, setPaidFreeFilter, enableDisableFilter, setEnableDisableFilter, entriesPerPage, setEntriesPerPage, searchTerm, setSearchTerm }) => (
  <>
    <div className="flex gap-4 mb-8">
      <div className="w-64">
        <Label htmlFor="paid-free-filter" className="mb-1">Paid/Free</Label>
        <Select value={paidFreeFilter} onValueChange={setPaidFreeFilter}>
          <SelectTrigger id="paid-free-filter">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-64">
        <Label htmlFor="enable-disable-filter" className="mb-1">Enable/Disable</Label>
        <Select value={enableDisableFilter} onValueChange={setEnableDisableFilter}>
          <SelectTrigger id="enable-disable-filter">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="enabled">Enabled</SelectItem>
            <SelectItem value="disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    <div className="flex justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Select value={entriesPerPage.toString()} onValueChange={(value) => setEntriesPerPage(Number(value))}>
          <SelectTrigger className="w-20">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm">entries</span>
      </div>
      <div className="flex items-center gap-2">
        <Label htmlFor="search">Search:</Label>
        <Input
          id="search"
          className="w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  </>
);

export default TestSeriesFilters;