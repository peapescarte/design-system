// import type { Ref } from 'vue'

// type ModalComp = HTMLElement & { open: () => void; close: () => void }

export function useModal() {
  const openModal = (modal: any) => {
    modal && modal?.open() 
  }

  const closeModal = (modal: any) => {
    modal && modal?.close() 
  }

  return {
    openModal,
    closeModal,
  }
}
