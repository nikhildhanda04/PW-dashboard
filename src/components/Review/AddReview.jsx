import React, { useState } from 'react';

const AddReview = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Review
      </button>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Review</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Reviewer Name</label>
                <input
                  type="text"
                  name="reviewerName"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Reviewer Email</label>
                <input
                  type="text"
                  name="reviewerEmail"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Review</label>
                <textarea
                  name="review"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Review Date</label>
                <input
                  type="datetime-local"
                  name="reviewDate"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReview;