import { useState} from "react";
import LiveClassForm from "../../components/LiveClass/live-class";
import TableDemo from "../../components/LiveClass/live-class-table";
import YtLiveClass from "@/components/LiveClass/YtLiveClass";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../../components/ui/dialog"; 

const LiveClass = () => {

  const [isDialogOpen, setIsDialogOpen] = useState(false); 

  return (
        <section className="bg-gray-100 py-10 px-[100px] space-y-10">
          
          <div className="grid grid-col-1 md:grid-cols-2 gap-4 px-[15vw]">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                Create New Live Class
              </button>
            </DialogTrigger>

            <DialogContent className="p-6 bg-white rounded-lg shadow-lg">
              <DialogTitle className="text-2xl font-semibold mb-4">Schedule a Live Class</DialogTitle>
              <DialogDescription className="text-gray-700 mb-6">
                Please fill in the details below to schedule a new live class.
              </DialogDescription>
              <LiveClassForm />
            </DialogContent>
          </Dialog>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
                Create New Youtube Live Class
              </button>
            </DialogTrigger>
            

            <DialogContent className="p-6 bg-white rounded-lg shadow-lg">
              <DialogTitle className="text-2xl font-semibold mb-4">Schedule a Youtube Live Class</DialogTitle>
              <DialogDescription className="text-gray-700 mb-6">
                Please fill in the details below to schedule a new youtube live class.
              </DialogDescription>
              <YtLiveClass />
            </DialogContent>
          </Dialog>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Scheduled Live Classes</h2>
            <TableDemo />
          </div>
        </section>
  );
};

export default LiveClass;
