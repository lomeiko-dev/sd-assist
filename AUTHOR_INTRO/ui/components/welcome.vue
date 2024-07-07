<script setup lang="ts">
import DecoLine from "./other/deco-line.vue";

interface IProps {
  nameProject: string;
}

const props = defineProps<IProps>();
const emits = defineEmits(["closed"]);
</script>
<template>
  <div class="welcome">
    <DecoLine />
    <h1>Добро пожаловать!</h1>
    <h2>Пет-Проект {{ props.nameProject }} представляет</h2>
    <h3>Автор проекта: Никита Ломейко</h3>
    <p>
      Проект является демонстрационным вариантом моих работ. Данный проект не несет коммерческого смысла и предназначен
      исключительно для демонстрации моих навыков и опыта в разработке.
    </p>
    <button @click="$emit('closed')" class="button">Перейти к проекту</button>
  </div>
</template>
<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  align-items: center;

  animation-duration: 2s;
  animation-name: appearancein;

  h1 {
    font-size: 42px;
    font-weight: 700;
    color: #f5f5dc;
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    color: #f5f5dc;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    color: #f5f5dc;
  }
  p {
    text-align: center;
    width: 100%;
    max-width: 600px;
    font-size: 16px;
    font-weight: 400;
    color: white;
    line-height: 24px;
  }
}

.button {
  background-color: #f5f5dc;
  padding: 10px 20px;
  border-radius: 6px;
  color: #333;
  transition: 0.3s;
}

.button:hover {
  background-color: #c7c7b7;
}

@keyframes appearancein {
  from {
    margin-top: -1000px;
  }

  to {
    margin-top: -20px;
  }
}

@media (max-width: 1240px) {
  .welcome {
    padding-top: 120px;
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: #f5f5dc;
    }

    h2 {
      font-size: 24px;
      font-weight: 500;
      color: #f5f5dc;
    }

    h3 {
      font-size: 18px;
      font-weight: 400;
      color: #f5f5dc;
    }
  }
}

@media (max-width: 1024px) {
  .welcome{
    padding-top: 170px;
    p{
      font-size: 14px;
    }
  }
}

@media (max-width: 600px) {
  .welcome{
    padding-top: 20px;
    gap: 10px;

    h1 {
      font-size: 24px;
      font-weight: 600;
      color: #f5f5dc;
    }

    h2 {
      font-size: 18px;
      font-weight: 500;
      color: #f5f5dc;
    }

    h3 {
      font-size: 16px;
      font-weight: 400;
      color: #f5f5dc;
    }
  }
}
</style>
