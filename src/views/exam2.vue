<template>
  <exam-layout-card>
    <h1 class="mb-3 text-center">Exam 2: Version Control</h1>
    <v-row>
      <v-col cols="12">
        <exam-card>
          <h3 class="mb-3 text-center">Problem</h3>
          <p>
            You work in the scrum team and last sprint you did a few bug fixes
            at a website. They've been tested and approved, so you've now been
            asked to put the fixes on production.
          </p>
          <ul class="mb-3">
            <li v-for="(list, index) in lists" :key="index">
              {{ list }}
            </li>
          </ul>
          <p>
            Describe what you would do to get your code right on production.
          </p>
        </exam-card>
      </v-col>

      <v-col cols="12">
        <exam-card>
          <h3 class="mb-3 text-center">Answer</h3>
          <p>TODO: Update this answer</p>
          <p class="text-justify body-1">
            Let's start with a straight-to-the-point answer before I provide an
            in-depth analysis of this problem. I would contact my supervisor,
            tell him/her what happened, and let them handle these issues
            (somehow this seems wrong that i am transferring the responsibility
            to other people). The reason being is that as a member of a team, it
            would be disrespectful for the team leader of the other team if I
            make any move regarding this matter. This type of behavioral
            question reminds us to not bypass the people in charge.
            Additionally, the person that commits an untested and unapproved
            code also has a feeling and ego so I, a member of another team might
            hurt him when being confronted about his mistake.
          </p>
          <p class="text-justify body-1">
            Something that I can say about this problem is that some companies
            are letting members of a team solve the same type of bug to make it
            some sort of competition. The first person to solve the bug gets to
            be proud of his fix and carry it as a medal of honor. If that is not
            the case in this scenario and is happening quite frequently, it is
            important to note that there might be a problem with communication
            between teams that should be fixed to save time, energy, and money
            not just for the employees but for the company as well.
          </p>
        </exam-card>
      </v-col>
    </v-row>
  </exam-layout-card>
</template>
<script>
export default {
  name: "exam2",
  components: {
    ExamLayoutCard: () => import("@/components/ExamLayoutCard"),
    ExamCard: () => import("@/components/ExamCard"),
  },
  data() {
    return {
      lists: [
        "The version now on production is '1.3.8'.",
        "Your work is in the git branch 'release/1.3.x'",
        "You'll find out that someone from another team has also done commits in this branch, but they're not allowed to live yet.",
      ],
    };
  },
};
</script>