import ReviewTable from "../../components/Review/review-table";
import AddReview from "../../components/Review/AddReview";
export default function Review(){

  
return(
    <>
        
        <section className="bg-gray-100 w-full py-10 px-[100px]">
        <AddReview />
            <ReviewTable />
        </section>
    </>

)
}
