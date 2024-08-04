class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        unordered_map<char,int> m;
        for(auto vec: board){
            for (auto c:vec)m[c]++;
        }
        for(auto c: word){
            m[c]--;
            if(m[c]< 0)return false;
        }
        for(int i =0; i < board.size(); i++){
            for(int j =0; j < board[0].size(); j++){
                    if( exist(board,word,0,i,j))return true;
            }
        }
        return false;
    }
    bool exist(vector<vector<char>>& board, string word, int index, int x, int y) {

        if(word[index] != board[x][y] || index >= word.size()) return false;

        if(index == word.size()-1 && word[index] == board[x][y]) return true;
        char temp = board[x][y];
        board[x][y] = '\0';

        for(int i{x-1}; i < x+2; i++){
            if(i < 0 || i >= board.size()) continue;
            
            if(exist(board, word, index+1, i,y)) return true;
        }
        for(int j{y-1}; j < y+2; j++){
            if(j < 0 || j >= board[0].size()) continue;
            if(exist(board, word, index+1, x,j)) return true;
        }
        board[x][y] = temp;

        return false;
    }
};
