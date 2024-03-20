<template>
  <div class="introduction-top-wrapper">
    <model-viewer
      id="shoes"
      src="assets/models/tvboard/tvboard.gltf"
      camera-controls
      camera-orbit="-30deg 60deg"
      enable-pan
      touch-action="none"
      exposure="0.7"
      shadow-intensity="1"
      shadow-softness="0.5"
      class="model-viewer"
    >
      <div class="controls">
        <div>
          Body Variant:
          <select id="body-variant" />
        </div>
        <div>
          Leg Variant:
          <select id="leg-variant" />
        </div>
      </div>
    </model-viewer>
    <div class="introduction-detail">
      <h3 class="introduction-detail-title">操作説明</h3>
      <p>selectorでカラーバリエーションを変更できる</p>
    </div>
  </div>
</template>

<script>
import { loadModelViewer } from "@/components/lib/modelViewer";

export default {
  name: "changeMaterials",
  data() {
    return {
      modelViewerObj: null,
      bodySelect: null,
      legSelect: null,
    };
  },
  async mounted() {
    await loadModelViewer();
    this.initBodySelector();
    this.initLegSelector();
    this.initModelViewer();
  },
  methods: {
    initBodySelector() {
      this.bodySelect = document.querySelector("#body-variant");
      this.bodySelect.addEventListener("input", (event) => {
        const changedValue = event.target.value;
        this.modelViewerObj.variantName =
          changedValue === "default" ? null : changedValue;
      });
    },
    initLegSelector() {
      this.legSelect = document.querySelector("#leg-variant");
      this.legSelect.addEventListener("input", (event) => {
        const changedValue = event.target.value;
        this.modelViewerObj.variantName =
          changedValue === "default" ? null : changedValue;
      });
    },
    initModelViewer() {
      const modelViewer = document.querySelector("model-viewer#shoes");
      modelViewer.addEventListener("load", () => {
        this.modelViewerObj = modelViewer;
        this.generateVariant();
      });
    },
    generateVariant() {
      const names = this.modelViewerObj.availableVariants;
      names.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;

        const isBodyOption = name.startsWith("body");
        const isLegOption = name.startsWith("leg");

        if (isBodyOption) this.bodySelect.appendChild(option);
        if (isLegOption) this.legSelect.appendChild(option);
      });

      this.bodySelect.value = "body_white";
      this.legSelect = "leg_black";
    },
  },
};
</script>
