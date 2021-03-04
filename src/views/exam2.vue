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
          <p class="text-justify body-1">
            I was also informed that his commits were not tested and approved
            yet, in that case talking with my team leader will be the best
            approach since a rollback of the recent commits might be necessary.
            Communication between teams is mostly handled by team leaders so it
            is important to inform them. If in case the commits that were made
            by the other team have been approved, then I will git pull to get
            the latest copy of the remote branch, fix any conflict if there's
            any then finally after another set of tests push the commits to the
            remote branch. Merging with the main/master branch should be the
            next step, but it is quite unclear if that is necessary for the time
            being.
          </p>
          <p class="text-justify body-1">
            Now, I think it is important to note that team leaders should handle
            the arrangement and decision between teams to avoid any hostile
            behavior that might happen between team members. One thing that I
            learned through experience is that some developers tend to get a
            little defensive or irritated especially when other developers try
            to tell them what to do. That is why letting a person with a higher
            rank step in is a huge help to avoid this type of situation.
          </p>
          <p class="text-justify body-1">
            Let's reverse the situation, suppose that I was the one to push
            those untested commits. In this scenario, I would very much
            appreciate it if you can tell it me regardless if you are a team
            member or a leader. I would most likely apologize and remember this
            incident so it will not happen again. I would also like to share
            that I come from a group that has a very open type of communication
            when it comes to developing websites. If my code is not working or
            efficient, I would like to be informed about it so I can improve
            upon it. After all, I loved learning more than anything.
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