import SyntaxHighlight from "../../components/common/SyntaxHighlight";
import AnchorLinks from "../../components/common/AnchorLinks";
import QueueCanvas from "../../components/visualizer/data-structure/QueueCanvas";
import { queueAnchorLinks } from "../../constants/common/anchorLink";
import { queueCode } from "../../constants/sample-code/code";

const Queue = () => {
  //---------------------------------------------------------------------
  // Sub component
  //---------------------------------------------------------------------
  const AboutQueue = () => {
    return (
      <div id="queue" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Queue</h1>
          <p className="text-lg mb-4 text-left">
            In computer science, a queue is a data structure that follows the
            First-In-First-Out (FIFO) principle. It operates on the basis that
            the first element added to the queue will be the first one to be
            removed.
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Real-world examples of queue in action:
          </h5>
          <ul className="marker:text-blue-600 list-decimal ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">
                Job Queues in Job Scheduling Systems:
              </p>
              <p>
                Job scheduling systems often use queues to manage and prioritize
                tasks. This is common in systems that need to schedule and
                execute recurring tasks or batch jobs.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Message Queues in Messaging Systems:
              </p>
              <p>
                Messaging systems, like RabbitMQ and Apache Kafka, use queues to
                manage the asynchronous communication between different parts of
                a distributed system. Messages are sent to a queue and consumed
                by subscribers when they are ready.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">
                Request Queues in Web Servers:
              </p>
              <p>
                Web servers often use request queues to manage incoming HTTP
                requests. The requests are queued up, and the server processes
                them one by one, ensuring that each request is handled without
                overwhelming the system.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const AboutOperation = () => {
    return (
      <div id="operation" className="flex">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 font-bold">Operation</h1>
          <p className="text-lg mb-4">
            The main operations in a stack are commonly referred to as "push"
            and "pop." These operations define how elements are added to and
            removed from a stack:
          </p>
          <h5 className="text-lg mb-4 mt-4 font-bold">
            Operation of Data structure:
          </h5>
          <ul className="marker:text-blue-600 list-disc ps-5 space-y-2">
            <li>
              <p className="no-underline font-bold">Enqueue (Insert):</p>
              <p>
                The enqueue operation is used to add an element to the back or
                rear of the queue. This operation increases the size of the
                queue by one. Elements are added to the rear of the queue, and
                it's often referred to as "enqueue" because new elements are
                enqueued or inserted.
              </p>
            </li>
            <li>
              <p className="no-underline font-bold">Dequeue (Delete):</p>
              <p>
                The dequeue operation is used to remove an element from the
                front or head of the queue. This operation decreases the size of
                the queue by one. Elements are removed from the front of the
                queue, and it's often referred to as "dequeue" because elements
                are dequeued or removed.
              </p>
            </li>
          </ul>
          <img
            src="/images/queue/queue.png"
            alt="About Queue"
            className="mb-5 shadow-lg rounded-lg border"
          />
          <p>Here is a simple example:</p>
          <SyntaxHighlight codeString={queueCode} language="javascript" />
        </div>
      </div>
    );
  };

  const PlayGround = () => {
    return (
      <div id="playground" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">Playground</h1>
          <QueueCanvas />
        </div>
      </div>
    );
  };

  const VideoPlayer = () => {
    return (
      <div id="vizualization" className="flex justify-start">
        <div className="max-w-4xl m-auto p-8">
          <h1 className="text-3xl mb-4 mt-4 font-bold text-left">
            Vizualization
          </h1>
          <video width="820" height="340" controls>
            <source src="/video/QueueVisualization.mp4" type="video/mp4" />
            Your browser does not support video player.
          </video>
        </div>
      </div>
    );
  };

  //---------------------------------------------------------------------
  // Main component
  //---------------------------------------------------------------------
  return (
    <div className="container mx-auto p-8 flex">
      <div className="flex-grow" style={{ flex: "4" }}>
        <AboutQueue />
        <AboutOperation />
        <PlayGround />
        <VideoPlayer />
      </div>

      <div className="flex-grow" style={{ flex: "1" }}>
        <AnchorLinks links={queueAnchorLinks} />
      </div>
    </div>
  );
};

export default Queue;
