import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Cookie {
  id: number;
  name: string;
  image: string;
  level: number;
  power: number;
  stars: number;
  rarity: string;
  unlocked: boolean;
}

interface Building {
  id: number;
  name: string;
  level: number;
  icon: string;
  production: number;
}

interface Quest {
  id: number;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
}

export default function Index() {
  const [cookies] = useState<Cookie[]>([
    { id: 1, name: 'GingerBrave', image: '🍪', level: 10, power: 1023, stars: 5, rarity: 'Epic', unlocked: true },
    { id: 2, name: 'Strawberry Cookie', image: '🍓', level: 8, power: 856, stars: 4, rarity: 'Rare', unlocked: true },
    { id: 3, name: 'Wizard Cookie', image: '🧙', level: 12, power: 1245, stars: 5, rarity: 'Epic', unlocked: true },
    { id: 4, name: 'Dark Choco Cookie', image: '🍫', level: 15, power: 1567, stars: 5, rarity: 'Legendary', unlocked: true },
    { id: 5, name: 'Sea Fairy Cookie', image: '🧚', level: 1, power: 234, stars: 3, rarity: 'Common', unlocked: false },
    { id: 6, name: 'Espresso Cookie', image: '☕', level: 9, power: 945, stars: 4, rarity: 'Rare', unlocked: true },
  ]);

  const [buildings] = useState<Building[]>([
    { id: 1, name: 'Cookie Castle', level: 5, icon: '🏰', production: 200 },
    { id: 2, name: 'Sugar Mill', level: 3, icon: '🏭', production: 150 },
    { id: 3, name: 'Jellybean Farm', level: 4, icon: '🌾', production: 180 },
    { id: 4, name: 'Magic Laboratory', level: 2, icon: '🔬', production: 100 },
  ]);

  const [quests] = useState<Quest[]>([
    { id: 1, title: 'Daily Login', description: 'Log in to collect rewards', reward: 100, completed: true },
    { id: 2, title: 'Complete 3 Battles', description: 'Win 3 battles in a row', reward: 250, completed: false },
    { id: 3, title: 'Upgrade a Cookie', description: 'Level up any cookie character', reward: 150, completed: false },
    { id: 4, title: 'Build New Structure', description: 'Construct or upgrade a building', reward: 300, completed: false },
  ]);

  const [playerProgress] = useState({
    level: 25,
    experience: 65,
    coins: 12450,
    gems: 340,
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'Epic': return 'bg-gradient-to-r from-purple-400 to-pink-500';
      case 'Rare': return 'bg-gradient-to-r from-blue-400 to-cyan-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cookie-dark via-purple-900 to-cookie-dark p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-cookie text-5xl md:text-7xl text-primary mb-4 animate-bounce-in">
            Cookie Kingdom
          </h1>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-primary/50">
              <Icon name="User" className="text-primary" size={24} />
              <span className="text-foreground font-bold">Level {playerProgress.level}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-primary/50">
              <Icon name="Coins" className="text-yellow-400" size={24} />
              <span className="text-foreground font-bold">{playerProgress.coins.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-secondary/50">
              <Icon name="Gem" className="text-secondary" size={24} />
              <span className="text-foreground font-bold">{playerProgress.gems}</span>
            </div>
          </div>
          <div className="mt-4 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-foreground/80 mb-2">
              <span>XP Progress</span>
              <span>{playerProgress.experience}%</span>
            </div>
            <Progress value={playerProgress.experience} className="h-3 cookie-glow" />
          </div>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/20 backdrop-blur-sm p-2 rounded-2xl border-2 border-primary/30">
            <TabsTrigger value="gallery" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl font-bold">
              <Icon name="Cookie" size={20} className="mr-2" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="kingdom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl font-bold">
              <Icon name="Castle" size={20} className="mr-2" />
              Kingdom
            </TabsTrigger>
            <TabsTrigger value="battle" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl font-bold">
              <Icon name="Swords" size={20} className="mr-2" />
              Battle
            </TabsTrigger>
            <TabsTrigger value="rewards" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl font-bold">
              <Icon name="Gift" size={20} className="mr-2" />
              Rewards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cookies.map((cookie) => (
                <Card 
                  key={cookie.id} 
                  className={`relative overflow-hidden ${getRarityColor(cookie.rarity)} p-1 hover-scale cursor-pointer transition-all ${!cookie.unlocked && 'opacity-50 grayscale'}`}
                >
                  <div className="bg-card rounded-lg p-6 h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-6xl">{cookie.image}</div>
                      <Badge variant="secondary" className="text-xs font-bold">
                        {cookie.rarity}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-xl text-card-foreground mb-2">{cookie.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Level</span>
                        <span className="font-bold text-card-foreground">{cookie.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Power</span>
                        <span className="font-bold text-card-foreground">{cookie.power}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Stars</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={16} 
                              className={i < cookie.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    {cookie.unlocked ? (
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold pulse-glow">
                        <Icon name="ArrowUp" size={16} className="mr-2" />
                        Upgrade
                      </Button>
                    ) : (
                      <Button className="w-full mt-4" variant="outline" disabled>
                        <Icon name="Lock" size={16} className="mr-2" />
                        Locked
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kingdom" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {buildings.map((building) => (
                <Card key={building.id} className="bg-card/90 backdrop-blur-sm hover-scale cursor-pointer border-2 border-primary/30">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{building.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl text-card-foreground mb-1">{building.name}</h3>
                        <p className="text-muted-foreground text-sm">Level {building.level}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Production</span>
                        <span className="font-bold text-lg text-primary">+{building.production}/hr</span>
                      </div>
                      <Progress value={(building.level / 10) * 100} className="h-2" />
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                        <Icon name="Hammer" size={16} className="mr-2" />
                        Upgrade (Cost: {building.level * 500} coins)
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="battle" className="space-y-6">
            <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-primary p-8">
              <div className="text-center mb-6">
                <h2 className="text-cookie text-4xl text-primary mb-2">Battle Arena</h2>
                <p className="text-foreground/80">Select your team and fight enemies!</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {cookies.filter(c => c.unlocked).slice(0, 5).map((cookie) => (
                  <Card key={cookie.id} className="p-4 text-center hover-scale cursor-pointer bg-card">
                    <div className="text-4xl mb-2">{cookie.image}</div>
                    <p className="text-xs font-bold text-card-foreground">{cookie.name}</p>
                    <p className="text-xs text-muted-foreground">Lv.{cookie.level}</p>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold pulse-glow">
                  <Icon name="Swords" size={20} className="mr-2" />
                  Start Battle
                </Button>
                <Button size="lg" variant="outline" className="font-bold">
                  <Icon name="Users" size={20} className="mr-2" />
                  Team Setup
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-card/80 backdrop-blur-sm p-6 text-center">
                <Icon name="Trophy" size={48} className="mx-auto mb-3 text-yellow-400" />
                <h3 className="font-bold text-2xl text-card-foreground mb-1">1,245</h3>
                <p className="text-muted-foreground text-sm">Victories</p>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm p-6 text-center">
                <Icon name="Target" size={48} className="mx-auto mb-3 text-red-400" />
                <h3 className="font-bold text-2xl text-card-foreground mb-1">3-8</h3>
                <p className="text-muted-foreground text-sm">Current Stage</p>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm p-6 text-center">
                <Icon name="Flame" size={48} className="mx-auto mb-3 text-orange-400" />
                <h3 className="font-bold text-2xl text-card-foreground mb-1">12</h3>
                <p className="text-muted-foreground text-sm">Win Streak</p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-6">
            <div className="space-y-4">
              {quests.map((quest) => (
                <Card 
                  key={quest.id} 
                  className={`bg-card/90 backdrop-blur-sm hover-scale transition-all border-2 ${quest.completed ? 'border-green-500/50' : 'border-primary/30'}`}
                >
                  <div className="p-6 flex items-center gap-4">
                    <div className={`p-3 rounded-full ${quest.completed ? 'bg-green-500/20' : 'bg-primary/20'}`}>
                      <Icon 
                        name={quest.completed ? 'CheckCircle2' : 'Circle'} 
                        size={32} 
                        className={quest.completed ? 'text-green-500' : 'text-primary'}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-card-foreground mb-1">{quest.title}</h3>
                      <p className="text-muted-foreground text-sm">{quest.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Gift" size={20} className="text-secondary" />
                        <span className="font-bold text-lg text-card-foreground">+{quest.reward}</span>
                      </div>
                      {quest.completed ? (
                        <Badge className="bg-green-500 text-white">Completed</Badge>
                      ) : (
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                          Claim
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-secondary p-8">
              <div className="text-center">
                <Icon name="Gift" size={64} className="mx-auto mb-4 text-secondary pulse-glow" />
                <h2 className="text-cookie text-3xl text-foreground mb-2">Daily Bonus</h2>
                <p className="text-foreground/80 mb-6">Come back tomorrow for more rewards!</p>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold pulse-glow">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  View Reward Calendar
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
