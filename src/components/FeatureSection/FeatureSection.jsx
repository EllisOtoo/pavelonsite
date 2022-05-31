/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import placeholderFeatureImage from "../../assets/icons/credit-card.png";
import noHiddenFees from "../../assets/icons/hand.png";

const features = [
  {
    name: "Everything you need to embed credit products",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
    list: [
      "One-stop-shop for acquisition, underwriting, origination, and onboarding",
      " Specialized lender marketplace across multiple industries",
      "Expert funding advisors",
      "Flexible platform to enhance, build, embed financial products",
    ],

    img: placeholderFeatureImage,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
    list: [
      "One-stop-shop for acquisition, underwriting, origination, and onboarding",
      " Specialized lender marketplace across multiple industries",
      "Expert funding advisors",
      "Flexible platform to enhance, build, embed financial products",
    ],
    img: noHiddenFees,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center gap-8">
                  <img className="w-2/12" src={feature.img} alt="" />
                  <p className=" text-3xl leading-8 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </div>

                <ul className=" my-8 ml-4 list-disc">
                  {feature.list.map((listItem) => (
                    <li
                      className="text-base leading-7 text-gray-500"
                      key={listItem}
                    >
                      {" "}
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
