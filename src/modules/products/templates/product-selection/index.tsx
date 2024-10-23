import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Region } from "@medusajs/medusa"
import { getProductsList, getRegion } from "@lib/data"
import InteractiveLink from "@modules/common/components/interactive-link"
import { ProductCollectionWithPreviews } from "types/global"
import medusaClient from "@medusajs/medusa-js"


const ProductSelection = (getProductsList) => {
    return (
      <getProductsList/>  
    )

}

export default ProductSelection
