<template>
	<div class="block-product-price">
		<div v-if="isDeal" class="deal-price-info">
			<h5><span v-if="isDeal">de </span><span class="deal-price"> {{ productPrice }}</span></h5>
			<h4>por <strong>{{ productDealPrice }}</strong></h4>
		</div>
		<div v-else class="price-info">
			<h4><strong>{{ productPrice }}</strong></h4>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		isDeal: {
			type: Boolean,
			default: false
		},
		price: {
			type: Number,
			required: true,
		}
	},
	data() {
		return {};
	},
	computed: {
		productPrice() {
			const price = this.price.toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2})
			return `R$${price}`;
		},
		productDealPrice() {
			const price = (this.price * 0.8).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 2})
			return `R$${price}`;
		}
	},
	watch: {},

	methods: {},
};
</script>

<style lang="stylus" scoped>
.block-product-price {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: center;
	padding-right: 15px;

	.deal-info {
		display: flex;
		justify-content: flex-end;
	}

	.deal-price {
		text-decoration: line-through;
	}
 
	.price-info {
		display: flex;
		justify-content: center;
	}
}
</style>