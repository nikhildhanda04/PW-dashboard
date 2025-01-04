import { useState, useEffect } from 'react';
import { Card, CardContent } from "../../ui/card";
import TestSeriesHeader from './TestSeriesHeader';
import TestSeriesFilters from './TestSeriesFilters';
import TestSeriesTable from './TestSeriesTable';
import { Button } from "../../ui/button";

const initialTestSeries = [
  { id: 1, title: 'CTET', price: 499, sortBy: 0, enabled: true },
  { id: 2, title: 'Test 1', price: 1000, sortBy: 1, enabled: true },
];

export default function TestSeries() {
  const [testSeries, setTestSeries] = useState(initialTestSeries);
  const [paidFreeFilter, setPaidFreeFilter] = useState('all');
  const [enableDisableFilter, setEnableDisableFilter] = useState('all');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [newSeries, setNewSeries] = useState({
    title: '',
    price: 0,
    sortBy: 0,
    enabled: true,
  });
  const [activeTab, setActiveTab] = useState('testseries');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const filteredTestSeries = testSeries.filter((series) => {
    const matchesPaidFree = paidFreeFilter === 'all' || 
      (paidFreeFilter === 'paid' && series.price > 0) ||
      (paidFreeFilter === 'free' && series.price === 0);
    const matchesEnableDisable = enableDisableFilter === 'all' ||
      (enableDisableFilter === 'enabled' && series.enabled) ||
      (enableDisableFilter === 'disabled' && !series.enabled);
    const matchesSearch = series.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPaidFree && matchesEnableDisable && matchesSearch;
  });

  const pageCount = Math.ceil(filteredTestSeries.length / entriesPerPage);
  const paginatedTestSeries = filteredTestSeries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage, searchTerm, paidFreeFilter, enableDisableFilter]);

  const toggleSeriesEnabled = (id) => {
    setTestSeries(testSeries.map(series => 
      series.id === id ? { ...series, enabled: !series.enabled } : series
    ));
  };

  const handleCreateTestSeries = () => {
    const newId = Math.max(...testSeries.map(s => s.id)) + 1;
    setTestSeries([...testSeries, { ...newSeries, id: newId }]);
    setNewSeries({ title: '', price: 0, sortBy: 0, enabled: true });
  };

  const handleEdit = (id) => {
    const seriesToEdit = testSeries.find((series) => series.id === id);
    if (seriesToEdit) {
      setNewSeries({ ...seriesToEdit });
    }
  };

  const handleCopy = (id) => {
    const seriesToCopy = testSeries.find((series) => series.id === id);
    if (seriesToCopy) {
      const copiedSeries = { ...seriesToCopy, id: Math.max(...testSeries.map(s => s.id)) + 1 };
      setTestSeries([...testSeries, copiedSeries]);
    }
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this entry?");
    if (isConfirmed) {
      setTestSeries(testSeries.filter((series) => series.id !== id));
    }
  };

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredTestSeries].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setTestSeries(sortedData);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Card>
        <TestSeriesHeader newSeries={newSeries} setNewSeries={setNewSeries} handleCreateTestSeries={handleCreateTestSeries} />
        <CardContent>
          <div className="flex gap-8 mb-6 border-b">
            {['Test Series', 'Test Results', 'Global Library'].map((tab) => {
              const tabValue = tab.toLowerCase().replace(' ', '');
              return (
                <Button
                  key={tab}
                  variant="ghost"
                  className={`relative font-medium pb-2 ${activeTab === tabValue ? 'text-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab(tabValue)}
                >
                  {tab}
                  {activeTab === tabValue && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                  )}
                </Button>
              );
            })}
          </div>
          {activeTab === 'testseries' && (
            <>
              <TestSeriesFilters
                paidFreeFilter={paidFreeFilter}
                setPaidFreeFilter={setPaidFreeFilter}
                enableDisableFilter={enableDisableFilter}
                setEnableDisableFilter={setEnableDisableFilter}
                entriesPerPage={entriesPerPage}
                setEntriesPerPage={setEntriesPerPage}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <TestSeriesTable
                paginatedTestSeries={paginatedTestSeries}
                currentPage={currentPage}
                entriesPerPage={entriesPerPage}
                toggleSeriesEnabled={toggleSeriesEnabled}
                handleEdit={handleEdit}
                handleCopy={handleCopy}
                handleDelete={handleDelete}
                sortData={sortData}
                sortConfig={sortConfig}
              />
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing {(currentPage - 1) * entriesPerPage + 1} to {Math.min(currentPage * entriesPerPage, filteredTestSeries.length)} of {filteredTestSeries.length} entries
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="text-gray-600"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {currentPage}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
                    disabled={currentPage === pageCount}
                    className="text-gray-600"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}