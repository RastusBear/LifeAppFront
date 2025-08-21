import { useEditGroupMutation } from "@/api/api";
import { useCallback } from "react";
import useGetGroup from "./useGetGroup";
import useModal from "./useModal";

export type PointEditType = "add" | "remove" | "overwrite";

export default function useEditPoints() {
  const { group } = useGetGroup();
  const [editGroup, { isLoading }] = useEditGroupMutation();

  const { showModal, openModal, closeModal } = useModal();

  const editPoints = useCallback(
    async (value: number, type: PointEditType) => {
      if (!group || isLoading) return;
      let finalPoints = group.points;
      switch (type) {
        case "add":
          finalPoints += value;
          break;
        case "remove":
          finalPoints -= value;
          break;
        case "overwrite":
          finalPoints = value;
          break;
      }
      await editGroup({ points: finalPoints });
      closeModal();
    },
    [editGroup, isLoading, group, closeModal]
  );

  return {
    showModal,
    openModal,
    closeModal,
    editPoints,
  };
}
