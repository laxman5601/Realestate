"use client"

import React from 'react'
import { Flame, Clock, Layers, Settings } from 'lucide-react'
import { useMapStore } from '@/store/mapStore'

type Props = {
	onSearchClick?: () => void
	onLocationClick?: () => void
	onFavoritesClick?: () => void
}

const MobileMapControls: React.FC<Props> = ({ onSearchClick, onLocationClick, onFavoritesClick }) => {
	const {
		visibleLayers,
		toggleLayer,
		heatmapType,
		setHeatmapType,
		isochroneMode,
		toggleIsochrone,
	} = useMapStore()

	return (
		<div className="w-full">
			<div className="flex items-center justify-between gap-3 px-4 py-3">
				<button onClick={onSearchClick} className="flex-1 bg-white/90 rounded-lg p-3 shadow text-sm font-medium">Search</button>
				<button onClick={onLocationClick} className="w-12 h-12 bg-white/90 rounded-lg p-2 shadow flex items-center justify-center">
					<Layers className="w-5 h-5" />
				</button>
				<button onClick={onFavoritesClick} className="w-12 h-12 bg-white/90 rounded-lg p-2 shadow flex items-center justify-center">
					<Settings className="w-5 h-5" />
				</button>
			</div>

			<div className="space-y-2 px-4 pb-6">
				<label className="flex items-center gap-3 bg-white rounded-lg p-3">
					<input
						type="checkbox"
						checked={visibleLayers.heatmap || false}
						onChange={() => toggleLayer('heatmap')}
						className="w-4 h-4"
					/>
					<Flame className="w-5 h-5 text-orange-500" />
					<span className="text-sm">Heatmap</span>
				</label>

				{visibleLayers.heatmap && (
					<div className="flex gap-2">
						{['price', 'demand', 'density'].map((t) => (
							<button
								key={t}
								onClick={() => setHeatmapType(t as any)}
								className={`flex-1 py-2 rounded ${heatmapType === t ? 'bg-sky-600 text-white' : 'bg-white/90'}`}
							>
								{t}
							</button>
						))}
					</div>
				)}

				<label className="flex items-center gap-3 bg-white rounded-lg p-3">
					<input type="checkbox" checked={isochroneMode} onChange={() => toggleIsochrone()} className="w-4 h-4" />
					<Clock className="w-5 h-5 text-blue-500" />
					<span className="text-sm">Commute Zones</span>
				</label>
			</div>
		</div>
	)
}

export default MobileMapControls
