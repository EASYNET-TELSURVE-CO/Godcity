import React from "react";

const FeaturesComparisonSection = () => (
	<div className="w-full mt-10 bg-white/70 dark:bg-gray-800/50 p-10 rounded-3xl shadow-lg font-light">
		<h3 className="text-2xl font-semibold mb-4">Features Comparison</h3>
		<table className="w-full border-collapse">
			<thead>
				<tr>
					<th className="py-2 text-left border-b">Feature</th>
					<th className="py-2 text-center border-b">Family</th>
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
);

export default FeaturesComparisonSection;
