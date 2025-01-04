import React from 'react';
import { CardHeader, CardTitle } from "../../ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "../../ui/dialog";
import { Button } from "../../ui/button";
import TestSeriesForm from './TestSeriesForm';

const TestSeriesHeader = ({ newSeries, setNewSeries, handleCreateTestSeries }) => (
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-xl font-medium">TEST SERIES</CardTitle>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">Create Test Series</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Test Series</DialogTitle>
        </DialogHeader>
        <TestSeriesForm newSeries={newSeries} setNewSeries={setNewSeries} handleCreateTestSeries={handleCreateTestSeries} />
      </DialogContent>
    </Dialog>
  </CardHeader>
);

export default TestSeriesHeader;