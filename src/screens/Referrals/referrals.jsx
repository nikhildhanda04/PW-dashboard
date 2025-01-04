import ReferralTable from "@/components/Referral/referral-table";
import ReferralSystem from "@/components/Referral/referral-card-system";

export default function Referral() {
  return (
    <section className="bg-gray-100 w-full py-10 px-[100px]">
      <div>
        <ReferralSystem />
      </div>
      <div>
        <ReferralTable />
      </div>
    </section>
  );
}