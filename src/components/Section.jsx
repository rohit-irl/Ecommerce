import { DollarSign, Undo2, Headset, BadgePercent } from "lucide-react";
const detail = [
    { icon: <DollarSign size={20} />, text: 'Best Prices & Offers', subtext: <>We prepared special discounts you<br />on grocery products.</> },
    { icon: <Undo2 size={20} />, text: '100% Return Policy', subtext: <>We prepared special discounts you<br />on grocery products.</> },
    { icon: <Headset size={20} />, text: 'Support 24/7', subtext: <>We prepared special discounts you<br />on grocery products.</> },
    { icon: <BadgePercent size={20} />, text: 'Great Offer Daily Deal', subtext: <>We prepared special discounts you<br />on grocery products.</> }
];
const Section = () => {
    return (
        <div className="w-full bg-[#629D23] text-white mt-5">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center py-5">
                    {detail.map((val, index) => (
                        <div key={index} className="flex items-center gap-3 p-5 w-full sm:w-1/2 lg:w-1/4">
                            <div className="bg-white w-15 h-15 rounded-full flex justify-center items-center">
                                <div className="bg-white w-8 h-8 rounded-full border-2 border-[#629D23] flex justify-center items-center">
                                    <span className="text-[#629D23]">{val.icon}</span>
                                </div>
                            </div>
                            <span>
                                <div className="font-semibold">{val.text}</div>
                                <div className="text-sm">{val.subtext}</div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Section;
