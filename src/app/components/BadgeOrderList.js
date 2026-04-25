"use client";

import React from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

/* ---------------- ITEM ---------------- */
function SortableItem({ id, onRemove }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between px-3 py-2 border rounded bg-white cursor-grab active:cursor-grabbing"
    >
      <span>{id}</span>

      <button
        type="button"
        onClick={() => onRemove(id)}
        className="text-red-500"
      >
        ✕
      </button>
    </div>
  );
}

/* ---------------- LIST ---------------- */
export default function BadgeOrderList({ badges, setBadges }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = badges.indexOf(active.id);
    const newIndex = badges.indexOf(over.id);

    setBadges(arrayMove(badges, oldIndex, newIndex));
  };

  const removeBadge = (id) => {
    setBadges((prev) => prev.filter((b) => b !== id));
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={badges}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col gap-2">
          {badges.map((id) => (
            <SortableItem
              key={id}
              id={id}
              onRemove={removeBadge}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}