import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number
  nome: string
  descricao: string
  preco: string | number
  foto: string
  porcao: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemExists) {
        state.items.push(action.payload)
      }

      state.isOpen = true
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
