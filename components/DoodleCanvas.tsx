"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pencil, Eraser, Trash2, X, Download } from "lucide-react";
import BrushStroke from "./BrushStroke";

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  color: string;
  width: number;
}

const CRAYON_COLORS = [
  { name: "Red", value: "#E63946" },
  { name: "Orange", value: "#F4A261" },
  { name: "Yellow", value: "#E9C46A" },
  { name: "Green", value: "#2A9D8F" },
  { name: "Blue", value: "#264653" },
  { name: "Purple", value: "#9B5DE5" },
  { name: "Pink", value: "#F15BB5" },
  { name: "Brown", value: "#8B4513" },
  { name: "Black", value: "#1A1A1A" },
];

export default function DoodleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [selectedColor, setSelectedColor] = useState(CRAYON_COLORS[0].value);
  const [brushSize, setBrushSize] = useState(3);
  const [isEraser, setIsEraser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      redrawCanvas();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Redraw all strokes
  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paper texture background
    ctx.fillStyle = "#FAFAF8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw all saved strokes
    strokes.forEach((stroke) => {
      drawStroke(ctx, stroke.points, stroke.color, stroke.width);
    });

    // Draw current stroke
    if (currentStroke.length > 1) {
      drawStroke(
        ctx,
        currentStroke,
        isEraser ? "#FAFAF8" : selectedColor,
        isEraser ? brushSize * 2 : brushSize
      );
    }
  }, [strokes, currentStroke, selectedColor, brushSize, isEraser]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  const drawStroke = (
    ctx: CanvasRenderingContext2D,
    points: Point[],
    color: string,
    width: number
  ) => {
    if (points.length < 2) return;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Add slight roughness for crayon effect
    ctx.shadowBlur = 1;
    ctx.shadowColor = color;

    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      // Quadratic curve for smoother lines
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;

      if (i === 1) {
        ctx.lineTo(curr.x, curr.y);
      } else {
        ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
      }
    }

    ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
    ctx.stroke();

    ctx.shadowBlur = 0;
  };

  const getPoint = (e: React.MouseEvent | React.TouchEvent): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    setShowHint(false);
    const point = getPoint(e);
    setCurrentStroke([point]);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;

    const point = getPoint(e);
    setCurrentStroke((prev) => [...prev, point]);
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (currentStroke.length > 1) {
      setStrokes((prev) => [
        ...prev,
        {
          points: currentStroke,
          color: isEraser ? "#FAFAF8" : selectedColor,
          width: isEraser ? brushSize * 2 : brushSize,
        },
      ]);
    }
    setCurrentStroke([]);
  };

  const clearCanvas = () => {
    setStrokes([]);
    setCurrentStroke([]);
    setShowHint(true);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary link to download the image
    const link = document.createElement("a");
    link.download = `doodle-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <>
      {/* Floating Doodle Button */}
      <motion.button
        initial={{ scale: 0, rotate: -180, filter: 'blur(150px)' }}
        animate={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
        transition={{
          duration: 0.8,
          ease: 'easeIn'
        }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#E8E8E6] shadow-lg border-2 border-black/10 flex items-center justify-center hover:scale-110 transition-transform"
        title="Open Doodle Pad"
      >
        <Pencil className="w-6 h-6 text-gray-800" />
      </motion.button>

      {/* Doodle Canvas Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#E8E8E6] border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <Pencil className="w-5 h-5 text-gray-700" />
                  <span className="font-poppins font-medium text-gray-800">
                    Doodle Pad
                  </span>
                </div>
                <div className="flex items-center gap-2">
                 <BrushStroke>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={saveCanvas}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-poppins text-gray-700 rounded-lg transition-colors"
                    title="Save doodle"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Save</span>
                  </motion.button>
                 </BrushStroke>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearCanvas}
                    className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                    title="Clear canvas"
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Toolbar */}
              <div className="flex flex-wrap items-center gap-3 px-4 py-3 bg-gray-50 border-b border-gray-200">
                {/* Color Palette */}
                <div className="flex items-center gap-1.5">
                  {CRAYON_COLORS.map((color) => (
                    <motion.button
                      key={color.value}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedColor(color.value);
                        setIsEraser(false);
                      }}
                      className={`w-7 h-7 rounded-full border-2 transition-all ${
                        selectedColor === color.value && !isEraser
                          ? "border-gray-800 scale-110"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>

                <div className="w-px h-8 bg-gray-300 mx-2" />

                {/* Eraser */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEraser(!isEraser)}
                  className={`p-2 rounded-lg transition-colors ${
                    isEraser
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                  title="Eraser"
                >
                  <Eraser className="w-5 h-5" />
                </motion.button>

                <div className="w-px h-8 bg-gray-300 mx-2" />

                {/* Brush Size */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-poppins">
                    Size:
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={brushSize}
                    onChange={(e) => setBrushSize(Number(e.target.value))}
                    className="w-20 accent-gray-800"
                  />
                </div>
              </div>

              {/* Canvas Area */}
              <div
                ref={containerRef}
                className="relative w-full cursor-crosshair"
              >
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="touch-none"
                  height={500}
                  width={700}
                />

                {/* Hint Text */}
                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <p className="text-gray-400 font-poppins text-sm select-none">
                        Draw something here with your crayon!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Crayon texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Footer hint */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-poppins text-center">
                  Tip: Use mouse or touch to draw • Select colors to switch
                  crayons
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
