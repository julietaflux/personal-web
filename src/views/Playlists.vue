<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4" lg="8">
      <v-container fluid class="text-center font-weight-light">
        <div class="d-flex justify-center pb-4">
          <iframe
            src="https://open.spotify.com/follow/1/?uri=spotify:user:julietaflux&size=detail&theme=dark"
            width="205"
            height="56"
            scrolling="no"
            frameborder="0"
            style="border:none; overflow:hidden;"
            allowtransparency="true"
          ></iframe>
        </div>
        <v-row>
          <template v-for="link in links" class="d-flex my-5">
            <v-col sm="12" md="12" lg="6" :key="link">
              <PlaylistCard
                v-bind:title="link.title"
                v-bind:description="link.description"
              />
            </v-col>
            <v-col sm="12" md="12" lg="6" :key="link">
              <iframe
                :src="link.url"
                width="450"
                height="230"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import PlaylistCard from "../components/PlaylistCard";

export default {
  name: "playlists",
  components: { PlaylistCard },
  data: () => ({
    links: [
      {
        title: "Disco Foundations I",
        url: "https://open.spotify.com/embed/playlist/1CLo5s8knReFSppDRzUoLr",
        description:
          "From the first jukeboxes, 3-level basements, sedative clubs, hotels and ex-churches almost exclusively for gays, blacks and Latinos, the synthetic and ready-made music, the euro-trash, the bump and orgies immersed in percussive psychedelic, the dazzling brilliance of exotic fantasy also leaded the way of Soul, between nights full of poppers, quaalude and seconal, utopia and hell, join me to witness the two-headed beast of groove rising.",
      },
      {
        title: "Disco Foundations II",
        url: "https://open.spotify.com/embed/playlist/5BwqpO0NVI9WsLJwltRu2v",
        description: "",
      },
      {
        title: "Disco Foundations III",
        url: "https://open.spotify.com/embed/playlist/2qQBht8sHyHgGm2Lyr4at4",
        description: "",
      },
      {
        title: "Disco Foundations IV",
        url: "https://open.spotify.com/embed/playlist/6Q1kqM30KWrArmvVG5YKS4",
        description: "",
      },
      {
        title: "Classics Introduction",
        url: "https://open.spotify.com/embed/playlist/171hWInefgudTXZMMZO8La",
        description: "",
      },
      {
        title: "Beethoven & Rachmaninov",
        url: "https://open.spotify.com/embed/playlist/7FabrukRR6fjnoiSzwSIoc",
        description:
          "El piano de Beethoven es una verdadera orquesta, con su dinámica y texturas extremas, humor y oscuridad, despreocupación y tensión. La música para piano de Rachmaninov aprovecha al máximo los sonidos grandes y opulentos del piano moderno y contiene ricas alusiones emocionales.",
      },
      {
        title: "Sibelius & Bartók",
        url: "https://open.spotify.com/embed/playlist/41oO7FexR6Op6qhcSe2I83",
        description: "",
      },
      {
        title: "Chilling",
        url: "https://open.spotify.com/embed/playlist/6iJOVGsuubavqZ15xixo59",
        description: "",
      },
      {
        title: "Power",
        url: "https://open.spotify.com/embed/playlist/4ieuodA30gN92TLqSL0qGf",
        description: "",
      },
      {
        title: "Fuck Rococó",
        url: "https://open.spotify.com/embed/playlist/65KAV0aVjdxNp3AZ4CIuvV",
        description:
          "En la dedicatoria de su ópera Alceste (1769), Gluck abogaba por una «noble simplicidad», condenaba el «ornamento superfluo» y decía que había evitado «alardear de dificultades a costa de la claridad».",
      },
      {
        title: "Pogo, etc",
        url: "https://open.spotify.com/embed/playlist/4JgtzHV1nWJbvNKsV8yODR",
        description: "",
      },
    ],
  }),
};
</script>
