import React from "react";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InboxIcon from "@mui/icons-material/Inbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PaymentSection = () => {
	return (
		<section className="py-20 bg-primary flex items-center justify-center space-y-10">
			<div className="container mx-auto px-4 flex items-center justify-center space-y-10 flex-col">
				<h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
					Support Our Mission
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Donation Section */}
					<div className="bg-white/70 dark:bg-gray-700/50 p-10 rounded-3xl shadow-lg flex items-center justify-center space-y-6 flex-col relative transition-transform transform hover:scale-105 hover:shadow-xl">
						<AttachMoneyIcon className="text-primary text-4xl absolute top-4 right-4" />
						<h3 className="text-2xl font-semibold mb-4">Donation</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4 font-light text-center">
							Your donation helps us support various community projects and
							outreach programs.
						</p>
						<button className="bg-primary text-white p-4 rounded-3xl hover:bg-primary-dark transition">
							Donate Now
						</button>
					</div>

					{/* Offering Basket Section */}
					<div className="bg-white/70 dark:bg-gray-700/50 p-10 rounded-3xl shadow-lg flex items-center justify-center space-y-6 flex-col relative transition-transform transform hover:scale-105 hover:shadow-xl">
						<InboxIcon className="text-primary text-4xl absolute top-4 right-4" />
						<h3 className="text-2xl font-semibold mb-4">Offering Basket</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4 font-light text-center">
							Contribute to the offering basket to support the church's
							operational expenses and future projects.
						</p>
						<button className="bg-primary text-white p-4 rounded-3xl hover:bg-primary-dark transition">
							Give Your Offering
						</button>
					</div>
					{/* Membership Section */}
					<div className="bg-white/70 dark:bg-gray-700/50 p-10 rounded-3xl shadow-lg flex items-center justify-center space-y-6 flex-col relative transition-transform transform hover:scale-105 hover:shadow-xl">
						<StarIcon className="text-primary text-4xl absolute top-4 right-4" />
						<h3 className="text-2xl font-semibold mb-4">Membership</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4 font-light text-center">
							Become a member of our community to receive exclusive updates,
							newsletters, and event invitations.
						</p>
						<button className="bg-primary text-white p-4 rounded-3xl hover:bg-primary-dark transition">
							Join Us
						</button>
					</div>
				</div>

				{/* Subscription Plans Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 font-light">
					{/* Family A Plan */}
					<div className="bg-white/70 dark:bg-gray-700/50 p-10 rounded-3xl shadow-lg flex flex-col items-center space-y-6 relative transition-transform transform hover:scale-105 hover:shadow-xl">
						<StarBorderIcon className="text-primary text-4xl absolute top-4 right-4" />
						<h3 className="text-2xl font-semibold mb-4">Family A Plan</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
							Basic features including access to community events and
							newsletters.
						</p>
						<div className="flex flex-col items-center space-y-4">
							<p className="text-xl font-bold">$5 / month</p>
							<button className="bg-primary text-white p-4 rounded-3xl hover:bg-primary-dark transition">
								Subscribe Now
							</button>
						</div>
					</div>

					{/* Premium Plan */}
					<div className="bg-primary text-white p-10 rounded-3xl shadow-lg flex flex-col items-center space-y-6 relative transition-transform transform hover:scale-105 hover:shadow-xl">
						<StarRateIcon className="text-white text-5xl absolute top-4 right-4" />
						<h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
						<p className="mb-4 text-center">
							Includes all features of Family A Plan plus premium access to
							exclusive content and events.
						</p>
						<div className="flex flex-col items-center space-y-4">
							<p className="text-xl font-bold">$15 / month</p>
							<button className="bg-white text-primary p-4 rounded-3xl hover:bg-gray-200 transition">
								Subscribe Now
							</button>
						</div>
					</div>

					{/* Enterprise Plan */}
					<div className="bg-white/70 dark:bg-gray-700/50 p-10 rounded-3xl shadow-lg flex flex-col items-center space-y-6 relative transition-transform transform hover:scale-105 hover:shadow-xl">
						<ExpandMoreIcon className="text-primary text-4xl absolute top-4 right-4" />
						<h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
						<p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
							All-inclusive plan with full access to all features, including
							custom content and priority support.
						</p>
						<div className="flex flex-col items-center space-y-4">
							<p className="text-xl font-bold">$30 / month</p>
							<button className="bg-primary text-white p-4 rounded-3xl hover:bg-primary-dark transition">
								Subscribe Now
							</button>
						</div>
					</div>
				</div>

				{/* Features Comparison Section */}
				<div className="w-full mt-10 bg-white/80 font-normal dark:bg-gray-700/50 p-10 rounded-3xl shadow-lg">
					<h3 className="text-2xl font-semibold mb-4">Features Comparison</h3>
					<table className="w-full border-collapse">
						<thead>
							<tr>
								<th className="py-2 text-left border-b">Feature</th>
								<th className="py-2 text-center border-b">Family A</th>
								<th className="py-2 text-center border-b">Premium</th>
								<th className="py-2 text-center border-b">Enterprise</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-2 text-left border-b">Community Events</td>
								<td className="py-2 text-center border-b">✔</td>
								<td className="py-2 text-center border-b">✔</td>
								<td className="py-2 text-center border-b">✔</td>
							</tr>
							<tr>
								<td className="py-2 text-left border-b">Exclusive Content</td>
								<td className="py-2 text-center border-b">✘</td>
								<td className="py-2 text-center border-b">✔</td>
								<td className="py-2 text-center border-b">✔</td>
							</tr>
							<tr>
								<td className="py-2 text-left border-b">Custom Content</td>
								<td className="py-2 text-center border-b">✘</td>
								<td className="py-2 text-center border-b">✘</td>
								<td className="py-2 text-center border-b">✔</td>
							</tr>
							<tr>
								<td className="py-2 text-left border-b">Priority Support</td>
								<td className="py-2 text-center border-b">✘</td>
								<td className="py-2 text-center border-b">✘</td>
								<td className="py-2 text-center border-b">✔</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default PaymentSection;
