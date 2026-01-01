import React, { useState, useRef, useEffect } from "react";
import { Card } from "@radix-ui/themes";
import { BentoCardProps } from "../types.ts";

export const BentoCard: React.FC<BentoCardProps> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      // Calculate card center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse distance from center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Calculate distance (to limit the range of the effect)
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = 600; // Only react if mouse is somewhat close

      if (distance < maxDistance) {
        // Lean AWAY from mouse:
        // If mouse is to the right (deltaX > 0), rotateY should be positive (leans left edge towards viewer)
        // If mouse is below (deltaY > 0), rotateX should be negative (leans top edge towards viewer)
        const intensity = 15; // Max degrees of rotation
        const factor = 1 - distance / maxDistance; // Stronger effect when closer

        const rotateY = (deltaX / (rect.width / 2)) * intensity * factor;
        const rotateX = -(deltaY / (rect.height / 2)) * intensity * factor;

        setTransform(
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        );
      } else {
        setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
      }
    };

    const handleMouseLeave = () => {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        height: "100%",
        transition: "transform 0.1s ease-out",
        transform: transform,
        transformStyle: "preserve-3d",
      }}
    >
      <Card
        size="3"
        variant="surface"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </Card>
    </div>
  );
};
