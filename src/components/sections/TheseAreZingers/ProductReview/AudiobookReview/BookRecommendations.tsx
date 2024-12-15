import React from 'react';
import { Bookmark, ExternalLink } from 'lucide-react';
import Button from '../../../../ui/Button';

const recommendations = [
  {
    title: "Ulysses",
    author: "James Joyce",
    narrator: "Jim Norton, Marcella Riordan",
    duration: "27 hrs and 16 mins",
    description: "A masterful performance that brings Joyce's Dublin to vivid life",
    links: {
      us: "https://www.audible.com/pd/Ulysses-Audiobook/B002V8MJ1I",
      canada: "https://www.audible.ca/pd/Ulysses-Audiobook/B072BFJHP4",
      rte: "https://www.rte.ie/culture/2020/0616/1147700-listen-ulysses-james-joyce-podcast/"
    }
  },
  {
    title: "Dubliners",
    author: "James Joyce",
    narrator: "Jim Norton",
    duration: "6 hrs and 50 mins",
    description: "Classic stories brought to life through masterful narration",
    links: {
      us: "https://www.audible.com/pd/Dubliners-Audiobook/B002V5CNBG",
      canada: "https://www.audible.ca/pd/Dubliners-Audiobook/B072BG8N3Q"
    }
  }
];

const BookRecommendations = () => {
  return (
    <div className="bg-white rounded-xl border border-lavender-300 p-6">
      <h4 className="text-xl font-semibold text-primary-500 mb-6">
        Must-Hear Recommendations
      </h4>
      
      <div className="space-y-6">
        {recommendations.map((book, index) => (
          <div 
            key={index}
            className="bg-lavender-300/10 rounded-lg p-4 space-y-4"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Bookmark className="w-6 h-6 text-accent-500" />
              </div>
              <div className="flex-1">
                <h5 className="font-medium text-charcoal-500">{book.title}</h5>
                <p className="text-sm text-charcoal-400">
                  By {book.author} • Narrated by {book.narrator}
                </p>
                <p className="text-sm text-charcoal-400 mt-1">
                  Length: {book.duration}
                </p>
                <p className="text-sm text-charcoal-500 mt-2">
                  {book.description}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="secondary"
                icon={ExternalLink}
                onClick={() => window.open(book.links.us, '_blank')}
              >
                Listen on Audible US
              </Button>
              <Button 
                variant="secondary"
                icon={ExternalLink}
                onClick={() => window.open(book.links.canada, '_blank')}
              >
                Listen on Audible Canada
              </Button>
              {book.links.rte && (
                <Button 
                  variant="primary"
                  icon={ExternalLink}
                  onClick={() => window.open(book.links.rte, '_blank')}
                >
                  Free RTE Performance
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookRecommendations;