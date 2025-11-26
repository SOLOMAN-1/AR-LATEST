import React, { useState, useEffect } from 'react';
import { Utensils, Info, X, Smartphone, Box, Camera } from 'lucide-react';


// We need to extend the JSX namespace to allow the custom element <model-viewer>
// In a real TS project, you'd add a declaration file. In JS/JSX, React renders it fine,
// but we suppress warnings by treating it as a standard DOM element.

const App1 = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // 1. DYNAMICALLY LOAD THE MODEL-VIEWER SCRIPT
  // This script is required to power the AR functionality.
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'module';
//    script.src =
//   "https://unpkg.com/@google/model-viewer@3.3.0/dist/model-viewer.min.js";

//     script.onload = () => {
//   setScriptLoaded(true);
//   console.log("Script has loaded!");
// };
//     document.body.appendChild(script);
//   },[]);
useEffect(() => {
    if (scriptLoaded) {
      console.log(scriptLoaded);
    }
  },[scriptLoaded]);
  // Mock Data for Food Items
  const foodItems = [
    {
      id: 1,
      name: "Classic Smash Burger",
      price: "$12.99",
      description: "Double patty, american cheese, house sauce, lettuce, tomato.",
      // Using a real GLB 3D model hosted by Google's model-viewer project
      modelSrc: "/burger_lowpoly.glb", 
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      calories: "850 kcal"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
      {/* Header */}
  

      {/* Main Content */}


        <div className="grid gap-6">
          {foodItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative h-48 bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {item.calories}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <span className="font-bold text-lg text-orange-600">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                <button
  className="w-full py-2.5 bg-gray-900 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
  onClick={() => setSelectedItem(item)}
>
  <Box className="w-4 h-4" />
  View 3D Model
</button>

              </div>
            </div>
          ))}
        </div>
   

      {/* AR Modal / Overlay */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center shrink-0 bg-white z-10">
              <div>
                <h3 className="font-bold text-lg">{selectedItem.name}</h3>
                <p className="text-xs text-gray-500">Use one finger to rotate, two to zoom</p>
              </div>
              <button 
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* 3D Viewer Container */}
            <div className="relative bg-gray-50 w-full h-[450px]">
<model-viewer
  src="/burger.glb"
  camera-controls
  auto-rotate

  ar
  ar-modes="scene-viewer webxr"
   ar-placement="floor"
   ar-scale="auto"
     shadow-intensity="1"
  shadow-softness="0.8"
    environment-image="https://modelviewer.dev/shared-assets/environments/neutral.hdr"
  disable-tap
  style={{ width: "400px", height: "400px", background: "lightgray" }}
> <button
    slot="ar-button"
    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold"
  >
    View in AR
  </button></model-viewer>

            
                {/* <model-viewer
                  src="/burger_lowpoly.glb"
                  ios-src="" 
                  poster={selectedItem.image}
                  alt={selectedItem.name}
                  shadow-intensity="1"
                  camera-controls
                  auto-rotate
                  ar
                  ar-modes="scene-viewer webxr"
                  ar-scale="fixed"
                  style={{ width: "100%", height: "100%", background: "#eee" }}
                >
                  <button
                    slot="ar-button"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2"
                  >
                    View in AR
                  </button>
                </model-viewer> */}

              
              
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100 shrink-0 bg-white">
              <div className="flex gap-3">
                <div className="hidden md:flex items-center gap-2 text-xs text-amber-600 bg-amber-50 px-3 py-2 rounded-lg flex-1">
                  <Smartphone className="w-4 h-4" />
                  Open this on a mobile device to see AR features.
                </div>
                <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition-colors">
                  Add to Order - {selectedItem.price}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default App1;

  // <model-viewer
                //   src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"

                //   poster={selectedItem.image}
                //         alt={selectedItem.name}
                //         shadow-intensity="1"
                //         camera-controls
                //         auto-rotate
                //         style={{ width: '100%', height: '100%' }}
                //       >

                //   {/* Custom AR Button Slot */}
                //   <button slot="ar-button" className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2 transition-transform active:scale-95 z-20 whitespace-nowrap">
                //     <Camera className="w-5 h-5" />
                //     View in your Space
                //   </button>

                //   {/* AR Prompt (Hand Animation) Slot */}
                //   <div slot="ar-prompt" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                //     <img 
                //       src="https://modelviewer.dev/shared-assets/icons/hand.png" 
                //       className="w-12 h-12 animate-pulse opacity-50"
                //       alt="Move phone to detect surface"
                //     />
                //   </div>
                // </model-viewer>